"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
  FirstName: z.string().min(3, "First Name must be at least 3 characters").max(20, "First Name must not exceed 20 characters"),
  LastName: z.string().min(3, "Last Name must be at least 3 characters").max(20, "Last Name must not exceed 20 characters"),
  Email: z.string().email("Invalid email address"),
  Message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must not exceed 500 characters"),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitted values:", values);
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-6">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 text-center mb-8">
              We would love to hear from you. Whether you have a question or just want to say hello, feel free to reach out!
            </p>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Send Us A Message
            </h2>
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {["FirstName", "LastName", "Email", "Message"].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <FormField
                      control={form.control}
                      name={field as keyof z.infer<typeof formSchema>}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {field.name === "Message" ? "Message" : `${field.name.replace(/([A-Z])/g, " $1")}`}
                          </FormLabel>
                          <FormControl>
                            {field.name === "Message" ? (
                              <textarea
                                {...field}
                                placeholder="Your Message"
                                className="p-3 border rounded-md w-full h-40"
                              ></textarea>
                            ) : (
                              <input
                                type={field.name === "Email" ? "email" : "text"}
                                {...field}
                                placeholder={`Your ${field.name.replace(/([A-Z])/g, " $1")}`}
                                className="p-3 border rounded-md w-full"
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </Form>
          </motion.section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
