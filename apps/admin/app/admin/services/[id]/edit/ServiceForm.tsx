"use client";

import type { Service } from "@bilacert/shared/types";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { upsertService } from "../../actions";
import CoreDetailsForm from "../../components/CoreDetailsForm";
import DetailsForm from "../../components/DetailsForm";
import FeaturesForm from "../../components/FeaturesForm";
import MediaForm from "../../components/MediaForm";
import PricingPlansForm from "../../components/PricingPlansForm";
import ProcessStepsForm from "../../components/ProcessStepsForm";
import PublishingForm from "../../components/PublishingForm";
import SeoForm from "../../components/SeoForm";
import SuccessStoryForm from "../../components/SuccessStoryForm";
import { type ServiceFormValues, serviceSchema } from "@bilacert/contracts/service";

interface ServiceFormProps {
  service?: Service | null;
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function ServiceForm({ service }: ServiceFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const isEditing = !!service;

  const form = useForm<ServiceFormValues>({
    resolver: standardSchemaResolver(serviceSchema),
    defaultValues: {
      title: "",
      slug: "",
      href: "",
      category: "",
      description: "",
      shortDescription: "",
      icon: "",
      orderIndex: 0,
      content: "",
      features: "",
      requirements: "",
      includes: "",
      published: false,
      featured: false,
      processingTime: "",
      pricing: 0,
      image: "",
      thumbnail: "",
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
      pricingPlans: [
        {
          title: "Basic",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
        {
          title: "Standard",
          description: "",
          price: "",
          features: "",
          popular: true,
        },
        {
          title: "Premium",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
      ],
      processSteps: [],
      successStory: { scenario: "", challenge: "", solution: "", result: "" },
    },
  });

  const {
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isSubmitting },
  } = form;

  const title = watch("title");

  useEffect(() => {
    if (!isEditing && title) {
      const slug = slugify(title);
      setValue("slug", slug);
      setValue("href", `/services/${slug}`);
    }
  }, [title, setValue, isEditing]);

  useEffect(() => {
    if (service) {
      const defaultPricingPlans = [
        {
          title: "Basic",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
        {
          title: "Standard",
          description: "",
          price: "",
          features: "",
          popular: true,
        },
        {
          title: "Premium",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
      ];

      const servicePricingPlans = (service.pricingPlans || []).map((p) => ({
        ...p,
        features: Array.isArray(p.features)
          ? p.features.join("\n")
          : p.features || "",
      }));

      const populatedPlans = defaultPricingPlans.map((defaultPlan, index) => {
        return servicePricingPlans[index] || defaultPlan;
      });

      reset({
        title: service.title || "",
        slug: service.slug || "",
        href: service.href || "",
        category: service.category || "",
        description: service.description || "",
        shortDescription: service.shortDescription || "",
        icon: service.icon || "",
        orderIndex: service.orderIndex || 0,
        content: service.content || "",
        features: Array.isArray(service.features)
          ? service.features.join("\n")
          : "",
        requirements: Array.isArray(service.requirements)
          ? service.requirements.join("\n")
          : "",
        includes: Array.isArray(service.includes)
          ? service.includes.join("\n")
          : "",
        published: service.published || false,
        featured: service.featured || false,
        processingTime: service.processingTime || "",
        pricing: service.pricing || 0,
        image: service.image || "",
        thumbnail: service.thumbnail || "",
        seoTitle: service.seoTitle || "",
        seoDescription: service.seoDescription || "",
        seoKeywords: service.seoKeywords || "",
        pricingPlans: populatedPlans,
        processSteps: (service.processSteps || []).map((p) => ({
          ...p,
          step: String(p.step),
        })),
        successStory: service.successStory || {
          scenario: "",
          challenge: "",
          solution: "",
          result: "",
        },
      });
    }
  }, [service, reset]);

  const onSubmit = async (values: ServiceFormValues) => {
    try {
      const processedValues = {
        ...values,
        processSteps: values.processSteps.map(
          (step): { title: string; description: string; step: string } => ({
            title: step.title,
            description: step.description,
            step: String(step.step),
          }),
        ),
      };

      const result = await upsertService(processedValues);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: isEditing ? "Service updated" : "Service created",
      });
      router.push("/admin/services");
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving service",
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <CoreDetailsForm form={form} />
            <FeaturesForm form={form} />
            <PricingPlansForm form={form} />
            <ProcessStepsForm form={form} />
            <SuccessStoryForm form={form} />
          </div>
          <div className="space-y-6 lg:col-span-1">
            <PublishingForm form={form} />
            <DetailsForm form={form} />
            <SeoForm form={form} />
            <MediaForm form={form} />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/services">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? "Save Changes" : "Create Service"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
