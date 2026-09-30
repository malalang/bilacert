"use client";

import { Loader2, Upload, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { uploadAdminImage } from "@/lib/imageUploadActions";
import { Button } from "./button";

interface ImageUploadProps {
  bucket: string;
  onUpload: (url: string) => void;
  initialUrl?: string | null;
  onRemove?: () => void;
}

export default function ImageUpload({
  bucket,
  onUpload,
  initialUrl,
  onRemove,
}: ImageUploadProps) {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    setImageUrl(initialUrl || null);
  }, [initialUrl]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("bucket", bucket);
      formData.append("file", file);

      const result = await uploadAdminImage(formData);

      if (!result.ok) {
        throw new Error(result.error);
      }

      if (!result.data) {
        throw new Error("The uploaded image URL could not be read.");
      }

      setImageUrl(result.data.url);
      onUpload(result.data.url);
      toast({ title: "Image uploaded successfully" });
    } catch (error: unknown) {
      toast({
        variant: "destructive",
        title: "Error uploading image",
        description: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    if (onRemove) {
      onRemove();
    } else {
      onUpload("");
    }
  };

  return (
    <div className="space-y-2">
      {imageUrl ? (
        <div className="relative group w-full max-w-sm">
          <Image
            src={imageUrl}
            alt="Uploaded image"
            width={400}
            height={200}
            className="rounded-lg object-cover border"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor={`image-upload-${bucket}`}
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {uploading ? (
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              ) : (
                <>
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, GIF up to 4MB
                  </p>
                </>
              )}
            </div>
            <input
              id={`image-upload-${bucket}`}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              disabled={uploading}
              accept="image/png,image/jpeg,image/gif"
            />
          </label>
        </div>
      )}
    </div>
  );
}
