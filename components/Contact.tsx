"use client";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  desc: z.string(),
});

const fields: {
  name: string;
  placehoder: string;
  type?: string;
} = [
  { name: "name", placeholder: "please enter your name" },
  { name: "email", placeholder: "please enter your email" },
  { name: "description", placeholder: "", type: "textarea" },
];

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      desc: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-2">
        <Mail fontSize={14} />
        <h3>Contact Me</h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {fields.map(({ name, placeholder, type }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as string}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{name}</FormLabel>
                  <FormControl>
                    {type === "textarea" ? (
                      <Textarea {...field} placeholder={placeholder} />
                    ) : (
                      <Input {...field} placeholder={placeholder} />
                    )}
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <Button type="submit">Send</Button>
        </form>
      </Form>
    </div>
  );
};
