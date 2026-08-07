"use client";

import type {
  PricingPlan,
  ProcessStep,
  Service,
  SuccessStory,
} from "@bilacert/contracts/service";
import { Icon } from "@bilacert/shared/Icon";
import { format } from "date-fns";
import { ArrowLeft, CheckCircle, Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteServiceDialog from "../DeleteServiceDialog";

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!service) return null;

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
    router.push("/admin/services");
    router.refresh();
  };

  const renderStringArray = (data: string[] | string | undefined) => {
    const arrayData = typeof data === "string" ? [data] : data;
    if (!arrayData || arrayData.length === 0)
      return <p className="text-sm text-muted-foreground">Not set.</p>;
    return (
      <ul className="mt-2 space-y-2 text-sm text-card-foreground">
        {arrayData.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderPricingPlans = (plans: PricingPlan[] | undefined) => {
    if (!plans || plans.length === 0)
      return (
        <p className="text-sm text-muted-foreground">No pricing plans defined.</p>
      );
    return (
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                {plan.popular && <Badge variant="default">Popular</Badge>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-2xl font-bold text-primary">{plan.price}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderProcessSteps = (steps: ProcessStep[] | undefined) => {
    if (!steps || steps.length === 0)
      return (
        <p className="text-sm text-muted-foreground">No process steps defined.</p>
      );
    return (
      <div className="relative mt-5 pl-6">
        <div className="absolute bottom-0 left-0 top-0 ml-3 w-px -translate-x-1/2 bg-primary/20" />
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start gap-4">
              <div className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md shadow-primary/20">
                {step.step}
              </div>
              <div className="rounded-xl bg-background p-4 shadow-sm shadow-black/5">
                <h5 className="font-semibold text-card-foreground">
                  {step.title}
                </h5>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSuccessStory = (story: SuccessStory | undefined) => {
    if (!story)
      return (
        <p className="text-sm text-muted-foreground">No success story defined.</p>
      );
    return (
      <Card className="mt-4 bg-muted/40 shadow-sm shadow-black/5">
        <CardContent className="space-y-4 p-6">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Scenario
            </h5>
            <p className="mt-1 text-sm text-card-foreground">{story.scenario}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Challenge
            </h5>
            <p className="mt-1 text-sm text-card-foreground">{story.challenge}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Solution
            </h5>
            <p className="mt-1 text-sm text-card-foreground">{story.solution}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Result
            </h5>
            <p className="mt-1 text-sm font-medium text-card-foreground">
              {story.result}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/services/${service.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden shadow-xl shadow-black/5">
          <CardHeader className="bg-muted/30">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant={service.published ? "default" : "secondary"}>
                    {service.published ? "Published" : "Draft"}
                  </Badge>
                  <Badge variant={service.featured ? "default" : "secondary"}>
                    {service.featured ? "Featured" : "Not Featured"}
                  </Badge>
                </div>
                <CardTitle className="text-3xl leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.category}</CardDescription>
              </div>
              {service.pricing !== null && service.pricing !== undefined && (
                <div className="rounded-2xl bg-background px-5 py-4 text-right shadow-sm shadow-black/5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Pricing
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    R{Number(service.pricing).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-5 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
                {service.description && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Description
                    </h4>
                    <p className="mt-1 text-sm text-card-foreground">
                      {service.description}
                    </p>
                  </div>
                )}
                {service.shortDescription && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Short Description
                    </h4>
                    <p className="mt-1 text-sm text-card-foreground">
                      {service.shortDescription}
                    </p>
                  </div>
                )}
                {service.content && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Content
                    </h4>
                    <div className="prose prose-sm mt-1 whitespace-pre-wrap text-sm text-card-foreground dark:prose-invert">
                      {service.content}
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Features
                  </h4>
                  {renderStringArray(service.features)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Requirements
                  </h4>
                  {renderStringArray(service.requirements)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Includes
                  </h4>
                  {renderStringArray(service.includes)}
                </div>
              </div>
              <div className="space-y-5 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
                {service.slug && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Slug
                    </h4>
                    <p className="mt-1 break-all font-mono text-sm text-card-foreground">
                      {service.slug}
                    </p>
                  </div>
                )}
                {service.href && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      HREF
                    </h4>
                    <p className="mt-1 break-all font-mono text-sm text-card-foreground">
                      {service.href}
                    </p>
                  </div>
                )}
                {service.icon && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Icon
                    </h4>
                    <div className="mt-2 flex items-center gap-2 rounded-xl bg-background px-3 py-2 shadow-sm shadow-black/5">
                      <Icon name={service.icon} className="h-5 w-5 text-accent" />
                      <p className="font-mono text-sm text-card-foreground">
                        {service.icon}
                      </p>
                    </div>
                  </div>
                )}
                {service.orderIndex !== undefined && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Order Index
                    </h4>
                    <p className="mt-1 text-sm text-card-foreground">
                      {service.orderIndex}
                    </p>
                  </div>
                )}
                {service.processingTime && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Processing Time
                    </h4>
                    <p className="mt-1 text-sm text-card-foreground">
                      {service.processingTime}
                    </p>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Created At
                  </h4>
                  <p className="mt-1 text-sm text-card-foreground">
                    {service.createdAt
                      ? format(new Date(service.createdAt), "PPpp")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {(service.image || service.thumbnail) && (
              <div className="mt-8 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
                <h3 className="mb-4 text-lg font-semibold">Media</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {service.image && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Image
                      </h4>
                      <Image
                        src={service.image}
                        alt="Service Image"
                        width={640}
                        height={360}
                        className="mt-2 h-48 w-full rounded-xl object-cover shadow-md shadow-black/10"
                      />
                    </div>
                  )}
                  {service.thumbnail && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Thumbnail
                      </h4>
                      <Image
                        src={service.thumbnail}
                        alt="Service Thumbnail"
                        width={640}
                        height={360}
                        className="mt-2 h-48 w-full rounded-xl object-cover shadow-md shadow-black/10"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {(service.seoTitle || service.seoDescription || service.seoKeywords) && (
              <div className="mt-8 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
                <h3 className="mb-4 text-lg font-semibold">SEO</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {service.seoTitle && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        SEO Title
                      </h4>
                      <p className="mt-1 text-sm text-card-foreground">
                        {service.seoTitle}
                      </p>
                    </div>
                  )}
                  {service.seoDescription && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        SEO Description
                      </h4>
                      <p className="mt-1 text-sm text-card-foreground">
                        {service.seoDescription}
                      </p>
                    </div>
                  )}
                  {service.seoKeywords && (
                    <div className="col-span-full">
                      <h4 className="text-sm font-medium text-muted-foreground">
                        SEO Keywords
                      </h4>
                      <p className="mt-1 text-sm text-card-foreground">
                        {service.seoKeywords}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-8 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
              <h3 className="mb-4 text-lg font-semibold">Pricing Plans</h3>
              {renderPricingPlans(service.pricingPlans)}
            </div>
            <div className="mt-8 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
              <h3 className="mb-4 text-lg font-semibold">Process Steps</h3>
              {renderProcessSteps(service.processSteps)}
            </div>
            <div className="mt-8 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
              <h3 className="mb-4 text-lg font-semibold">Success Story</h3>
              {renderSuccessStory(service.successStory)}
            </div>
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteServiceDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          service={service}
        />
      )}
    </>
  );
}
