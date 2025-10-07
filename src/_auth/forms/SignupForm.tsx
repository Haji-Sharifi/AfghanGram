import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { SignupValidation } from "@/lib/validation"

const SignupForm = () => {
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",  
    },
  })

  function onSubmit(values: z.infer<typeof SignupValidation>) {
    console.log(values)
  }

  return (
    <Form {...form}>

          <div className="sm:w-420 flex-centerflex-col">
            <img src="/assets/images/logo.svg" alt="logo" />

          </div>


      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto mt-10">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>Your unique username (2–50 characters)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default SignupForm
