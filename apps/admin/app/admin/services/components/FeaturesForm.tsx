"use client";

import { ArrayInput } from "@/components/admin/ArrayInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesForm({ form }: { form: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Features & Requirements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ArrayInput
          control={form.control}
          name="features"
          label="Features"
          addLabel="Add feature"
          placeholder="Add a feature"
        />
        <ArrayInput
          control={form.control}
          name="requirements"
          label="Requirements"
          addLabel="Add requirement"
          placeholder="Add a requirement"
        />
        <ArrayInput
          control={form.control}
          name="includes"
          label="What's Included"
          addLabel="Add included item"
          placeholder="Add an included item"
        />
      </CardContent>
    </Card>
  );
}
