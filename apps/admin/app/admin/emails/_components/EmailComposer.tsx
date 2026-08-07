"use client";

import type { EmailComposeActionState } from "@bilacert/contracts/email";
import { FileText, Send } from "lucide-react";
import { useActionState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitEmailAction } from "../actions";

const initialState: EmailComposeActionState = {};

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;

  return <p className="text-sm text-destructive">{messages[0]}</p>;
}

export default function EmailComposer({
  fromAddress,
  initialToAddress = "",
  initialSubject = "",
  initialContent = "",
  returnTo,
}: {
  fromAddress: string;
  initialToAddress?: string;
  initialSubject?: string;
  initialContent?: string;
  returnTo?: string;
}) {
  const [state, formAction, isPending] = useActionState(
    submitEmailAction,
    initialState,
  );

  return (
    <form action={formAction}>
      {returnTo && <input type="hidden" name="returnTo" value={returnTo} />}
      <Card className="border border-border/70 shadow-xl shadow-black/5">
        <CardHeader>
          <CardTitle>New message</CardTitle>
          <CardDescription>
            Send immediately or save the message in Zoho Drafts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {state.error && (
            <Alert variant="destructive">
              <AlertTitle>Message not saved</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="fromAddress">From</Label>
            <Input id="fromAddress" value={fromAddress} readOnly disabled />
          </div>

          <div className="space-y-2">
            <Label htmlFor="toAddress">To</Label>
            <Input
              id="toAddress"
              name="toAddress"
              type="text"
              inputMode="email"
              autoComplete="email"
              defaultValue={initialToAddress}
              placeholder="name@example.com, another@example.com"
              aria-invalid={Boolean(state.fieldErrors?.toAddress)}
              required
            />
            <FieldError messages={state.fieldErrors?.toAddress} />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ccAddress">Cc</Label>
              <Input
                id="ccAddress"
                name="ccAddress"
                type="text"
                inputMode="email"
                placeholder="Optional"
                aria-invalid={Boolean(state.fieldErrors?.ccAddress)}
              />
              <FieldError messages={state.fieldErrors?.ccAddress} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bccAddress">Bcc</Label>
              <Input
                id="bccAddress"
                name="bccAddress"
                type="text"
                inputMode="email"
                placeholder="Optional"
                aria-invalid={Boolean(state.fieldErrors?.bccAddress)}
              />
              <FieldError messages={state.fieldErrors?.bccAddress} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              defaultValue={initialSubject}
              aria-invalid={Boolean(state.fieldErrors?.subject)}
              required
            />
            <FieldError messages={state.fieldErrors?.subject} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Message</Label>
            <Textarea
              id="content"
              name="content"
              rows={16}
              className="min-h-72 resize-y"
              defaultValue={initialContent}
              aria-invalid={Boolean(state.fieldErrors?.content)}
              required
            />
            <FieldError messages={state.fieldErrors?.content} />
          </div>

          <div className="flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end">
            <Button
              type="submit"
              name="intent"
              value="draft"
              variant="outline"
              disabled={isPending}
            >
              <FileText className="h-4 w-4" />
              {isPending ? "Saving…" : "Save draft"}
            </Button>
            <Button
              type="submit"
              name="intent"
              value="send"
              disabled={isPending}
            >
              <Send className="h-4 w-4" />
              {isPending ? "Sending…" : "Send email"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
