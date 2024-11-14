'use client';

import LoadingButton from '@/components/LoadingButton';
import SendButton from '@/components/SendButton';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';



// form schema to validate the form data
const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters long',
    })
    .max(50, {
      message: 'Name must be at most 50 characters long',
    }),
  email: z.string().email('Invalid email').min(2, 'Email is required'),
  date: z.string(),
  bustype: z.string(),
  busLocation: z.string(),
  loanType: z.string(),
  loanInterest: z.string(),
  purpose: z.string(),
  loanAmount: z.string(),
  amountInWords: z.string(),
  loanPeriod: z.string(),
  security: z
    .string()
    .min(10, {
      message: 'Security detaitls must be at least 10 characters.',
    })
    .max(160, {
      message: 'Security details must not be longer than 30 characters.',
    }),
});

// page to include a form to be filled out by the admin
const AcceptanceLetter = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      date: '',
      bustype: '',
      busLocation: '',
      loanType: '',
      loanInterest: '',
      purpose: '',
      loanAmount: '',
      amountInWords: '',
      loanPeriod: '',
      security: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!values.email) return;

    setLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          date: values.date,
          bustype: values.bustype,
          busLocation: values.busLocation,
          loanType: values.loanType,
          loanInterest: values.loanInterest,
          purpose: values.purpose,
          loanAmount: values.loanAmount,
          amountInWords: values.amountInWords,
          loanPeriod: values.loanPeriod,
          security: values.security,
        }),
      });

      if (response.ok) {
        toast.success('Email sent successfully and sent to client!');
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      toast.error('Email not sent!', error);
    }
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-2">
        <div className="mb-6 grid grid-cols-1 gap-2 space-y-2 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Applicant&#39; Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Applicant&#39; Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="adventcapital@mail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bustype"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business type</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type of business"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="busLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Location</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-2">
          <FormField
            control={form.control}
            name="loanType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loan type</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="loanAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loan Amount</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amountInWords"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount in words</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="loanInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loan Interest</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purpose</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="loanPeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loan Period</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="security"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Security</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write the security details of the loan ..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-6">
          {loading ? (
            <div className="flex items-center justify-center">
              <LoadingButton />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <SendButton />
            </div>
          )}
        </div>
      </form>
    </Form>
  );
};

export default AcceptanceLetter;
