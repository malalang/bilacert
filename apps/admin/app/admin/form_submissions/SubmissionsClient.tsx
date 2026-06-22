"use client";

import type { Submission } from "@bilacert/shared/types";
import { useSubmissions } from "@bilacert/supabase/hooks/useSubmissions";
import {
  Archive,
  CheckCircle2,
  Clock,
  Inbox,
  LayoutGrid,
  Search,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DeleteSubmissionDialog from "./DeleteSubmissionDialog";
import SubmissionCard from "./SubmissionCard";

export default function SubmissionsClient() {
  const { data: submissions, loading, error } = useSubmissions();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const handleDelete = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialogs = () => {
    setIsDeleteDialogOpen(false);
    setSelectedSubmission(null);
  };

  if (error) {
    return (
      <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive font-medium">
        Error loading submissions: {error.message}
      </div>
    );
  }

  const filtered = (submissions || []).filter((s) => {
    const term = search.toLowerCase();
    const matchesSearch =
      s.fullName?.toLowerCase().includes(term) ||
      s.email?.toLowerCase().includes(term) ||
      s.serviceName?.toLowerCase().includes(term);

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && s.status === activeTab;
  });

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-end gap-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-72" />
        </div>
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Form Submissions
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage and track all customer inquiries and service applications.
          </p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-10 shadow-sm"
          />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto sm:w-auto">
          <TabsTrigger value="all" className="gap-2">
            <LayoutGrid className="h-3.5 w-3.5" /> <span>All</span>
          </TabsTrigger>
          <TabsTrigger value="pending" className="gap-2">
            <Clock className="h-3.5 w-3.5 text-yellow-600" />
            <span>Pending</span>
          </TabsTrigger>
          <TabsTrigger value="in-progress" className="gap-2">
            <Inbox className="h-3.5 w-3.5 text-blue-600" />
            <span>Processing</span>
          </TabsTrigger>
          <TabsTrigger value="completed" className="gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Completed</span>
          </TabsTrigger>
          <TabsTrigger value="rejected" className="gap-2">
            <XCircle className="h-3.5 w-3.5 text-red-600" />
            <span className="hidden sm:inline">Rejected</span>
          </TabsTrigger>
          <TabsTrigger value="archived" className="gap-2">
            <Archive className="h-3.5 w-3.5 text-slate-600" />
            <span className="hidden sm:inline">Archived</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filtered.length === 0 ? (
            <Card className="border-dashed py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Inbox className="h-8 w-8 text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold">No submissions found</h3>
                <p className="text-sm text-muted-foreground max-w-xs mt-2">
                  {search
                    ? "We couldn't find any submissions matching your search criteria."
                    : `You don't have any ${activeTab !== "all" ? activeTab : ""} submissions at the moment.`}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Showing {filtered.length} submission
                  {filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
              {filtered.map((submission) => (
                <SubmissionCard
                  key={submission.id}
                  submission={submission}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {isDeleteDialogOpen && (
        <DeleteSubmissionDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialogs}
          submission={selectedSubmission}
        />
      )}
    </div>
  );
}
