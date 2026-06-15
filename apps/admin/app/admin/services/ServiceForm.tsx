"use client";

import type { Service } from "@bilacert/shared/types";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/ui/ImageUpload";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { upsertService } from "./actions";
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
      includes: [], 
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
          features: [],
          popular: false,
        },
        {
          title: "Standard",
          description: "",
          price: "",
          features: [],
          popular: true,
        },
        {
          title: "Premium",
          description: "",
          price: "",
          features: [],
          popular: false,
        },
      ],
      processSteps: [],
      successStory: { scenario: "", challenge: "", solution: "", result: "" },
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { isSubmitting },
  } = form;

  const {
    fields: processStepFields,
    append: appendProcessStep,
    remove: removeProcessStep,
  } = useFieldArray({
    control,
    name: "processSteps",
  });

  const { fields: pricingPlanFields } = useFieldArray({
    control,
    name: "pricingPlans",
  });

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
        includes: Array.isArray(service.includes) ? service.includes : [],
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
            <Card>
              <CardHeader>
                <CardTitle>Core Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="href"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL (href)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shortDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features & Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="features"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Features (one per line)</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requirements (one per line)</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="includes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's Included (one per line)</FormLabel>
                      <FormControl>
                        <Textarea
                          value={Array.isArray(field.value) ? field.value.join("\n") : ""}
                          onChange={(event) =>
                            field.onChange(
                              event.target.value
                                .split("\n")
                                .map((item) => item.trim())
                                .filter(Boolean),
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing Plans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-6">
                  {pricingPlanFields.map((field, index) => (
                    <Card key={field.id} className="bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-lg">{`Plan ${index + 1}`}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.title`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Plan Title</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.description`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Plan Description</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.price`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.features`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Features (one per line)</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.popular`}
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-card p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  Most Popular
                                </FormLabel>
                                <FormDescription>
                                  Highlight this plan.
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Process Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {processStepFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex items-start gap-4 p-4 border rounded-md"
                  >
                    <div className="grid gap-2 flex-grow">
                      <FormField
                        control={form.control}
                        name={`processSteps.${index}.step`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step Number</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`processSteps.${index}.title`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`processSteps.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step Description</FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={2} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeProcessStep(index)}
                      className="mt-7"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendProcessStep({
                      step: `${processStepFields.length + 1}`,
                      title: "",
                      description: "",
                    })
                  }
                >
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Step
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Success Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="successStory.scenario"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scenario</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value ?? ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="successStory.challenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Challenge</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value ?? ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="successStory.solution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Solution</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value ?? ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="successStory.result"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Result</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value ?? ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="published"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Published</FormLabel>
                        <FormDescription>
                          Make this service visible on the site.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="featured"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Featured</FormLabel>
                        <FormDescription>
                          Feature this service on the homepage.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="icon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Icon</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g., Shield" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="orderIndex"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Index</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="processingTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Processing Time</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pricing"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (ZAR)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.01" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="seoTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seoDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seoKeywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Keywords</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          bucket="services"
                          initialUrl={field.value}
                          onUpload={(url) => field.onChange(url)}
                          onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="thumbnail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thumbnail</FormLabel>
                      <FormControl>
                        <ImageUpload
                          bucket="services"
                          initialUrl={field.value}
                          onUpload={(url) => field.onChange(url)}
                          onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
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
