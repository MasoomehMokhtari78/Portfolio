"use client";
import { z } from "zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  desc: z.string(),
});

const fields: {
  name: string;
  placeholder: string;
  type?: string;
}[] = [
  { name: "name", placeholder: "please enter your name" },
  { name: "email", placeholder: "please enter your email" },
  { name: "description", placeholder: "", type: "textarea" },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      desc: "",
    },
  });

  const onSubmit = () =>
    // values: z.infer<typeof formSchema>
    {};
  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col gap-4"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex gap-2">
        <Mail fontSize={14} />
        <h3>Contact Me</h3>
      </div>
      <p>
        You can write me a message or contact me directly at:{" "}
        <a
          className="text-xl cursor-pointer hover:underline"
          href="mailto:masoomehmokhtari693@gmail.com"
        >
          masoomehmokhtari693@gmail.com
        </a>
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {fields.map(({ name, placeholder, type }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
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
    </motion.div>
  );
};
