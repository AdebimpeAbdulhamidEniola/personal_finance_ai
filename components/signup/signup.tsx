"use client";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpSchema, SignUpData} from '../../schema';
import {Input} from '../ui/input';
import {Button} from '../ui/button';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/form';
import {Mail, Lock,} from 'lucide-react';
import {FcGoogle} from 'react-icons/fc';
import Link from "next/link";


const SignUpForm = ( ) => {
    const form = useForm<SignUpData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    })

    const onSubmit = (data: SignUpData) => {
        console.log(data);
        form.reset();
    } 

    return (
    <div className="w-full max-w-md mx-auto space-y-8">
            {/* The Head of Form */}
            <div className="space-y-1 text-center">
                <p className="text-[24px] font-bold">Create an Acccount</p>
                <p className="text-[var(--finance-slate-medium)] text-[14px]">
                    Enter your details to start tracking your money with FinAI.
                </p>
            </div>
            {/* The Form */}
            <Form {...form}>
                <form onSubmit = {form.handleSubmit(onSubmit)} className='mt-4 space-y-4'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-[13px] font-medium text-[var(--finance-slate-dark)]">Full Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Enter your full name" className="pl-10 h-11 bg-[var(--finance-gray-light)] border-[var(--finance-slate-border)] text-[14px] placeholder:text-[var(--finance-slate-light)]" {...field} /> 

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-[13px] font-medium text-[var(--finance-slate-dark)]">Email</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-[var(--finance-slate-light)]" />
                                        <Input type="email" placeholder="name@company.com" className="pl-10 h-11 bg-[var(--finance-gray-light)] border-[var(--finance-slate-border)] text-[14px] placeholder:text-[var(--finance-slate-light)]" {...field} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                    
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-[13px] font-medium text-[var(--finance-slate-dark)]">Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-[var(--finance-slate-light)]" />
                                        <Input type="password" placeholder="Enter your password" className="pl-10 h-11 bg-[var(--finance-gray-light)] border-[var(--finance-slate-border)] text-[14px] placeholder:text-[var(--finance-slate-light)]" {...field} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({field}) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-[13px] font-medium text-[var(--finance-slate-dark)]">Confirm Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-[var(--finance-slate-light)]" />
                                        <Input type="password" placeholder="Confirm your password" className="pl-10 h-11 bg-[var(--finance-gray-light)] border-[var(--finance-slate-border)] text-[14px] placeholder:text-[var(--finance-slate-light)]" {...field} />
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='w-full h-11 text-[14px] font-semibold tracking-wide shadow-sm'>Create Account</Button>
                </form>
            </Form>

            <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-[var(--finance-slate-border)]" />
                    <p className="text-[12px] text-[var(--finance-slate-light)] uppercase tracking-wide">
                        Or continue with
                    </p>
                    <div className="h-px flex-1 bg-[var(--finance-slate-border)]" />
                </div>
                <Button
                    variant={'outline'}
                    className="w-full h-11 bg-white border-[var(--finance-slate-border)] text-[var(--finance-gray-dark)] font-medium hover:bg-[var(--finance-gray-light)]"
                >
                    <FcGoogle className="mr-2 h-5 w-5" />
                    Continue with Google
                </Button>
            </div>

            <p className="text-center text-[13px] text-[var(--finance-slate-medium)]">
                Already have an account?{" "}
                <Link href="/signin">
                    <Button
                        variant="ghost"
                        className="h-auto p-0 px-1 text-[13px] text-[var(--finance-primary-blue)] hover:bg-transparent underline-offset-4 hover:underline"
                    >
                        Log in
                    </Button>
                </Link>
            </p>
        </div>
    );
};
export default SignUpForm