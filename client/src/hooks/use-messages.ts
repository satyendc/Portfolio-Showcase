import { useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCreateMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Validate data against schema before sending
      const validated = api.messages.create.input.parse(data);
      
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Handle validation errors (400) or internal errors (500)
        const errorData = await res.json();
        
        if (res.status === 400) {
          const parsedError = api.messages.create.responses[400].parse(errorData);
          throw new Error(parsedError.message);
        }
        
        throw new Error("Failed to send message. Please try again later.");
      }

      return api.messages.create.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default", // Using default as we'll style the toaster
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
