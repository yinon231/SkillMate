import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  username: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters",
  }),
});
const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-xl w-md h-110 p-5">
        <p className="text-2xl text-center">Sign in</p>
        <p className="text-gray-500 text-center mt-2">
          Welcome user, please sign in to continue
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full max-w-sm items-center gap-3 mt-4">
                  <Label htmlFor="email" className="text-md">
                    Email
                  </Label>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-2"
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full max-w-sm items-center gap-3 mt-4">
                  <Label htmlFor="email" className="text-md">
                    Password
                  </Label>
                  <FormControl>
                    <Input
                      type="password"
                      id="email"
                      placeholder="Enter password"
                      className="focus-visible:ring-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <div className="mt-8 w-full flex items-center justify-center">
              <Button className="hover:bg-primary/70">Click</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Login;
