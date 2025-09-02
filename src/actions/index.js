import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  sendSignup: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().optional(),
      message: z.string().optional(),
    }),
    async handler(input) {
      try {
        // Do your email sending / DB write here
        console.log("✅ Form submission", input);
        return { success: true };
      } catch (err) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: err.message,
        });
      }
    },
  }),
};
