"use client";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpSchema, SignUpData} from '../../schema';
import {Input} from '../ui/input';
import {Button} from '../ui/button';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/form';
import {Mail, Lock,} from 'lucide-react';
import {FcGoogle} from 'react-icons/fc';


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
                <p className="text-[#64748B] text-[14px]">
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
                                <FormLabel className="text-[13px] font-medium text-[#1E293B]">Full Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Enter your full name" className="pl-10 h-11 bg-[#F8FAFC] border-[#E2E8F0] text-[14px] placeholder:text-[#94A3B8]" {...field} /> 

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
                                <FormLabel className="text-[13px] font-medium text-[#1E293B]">Email</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" />
                                        <Input type="email" placeholder="name@company.com" className="pl-10 h-11 bg-[#F8FAFC] border-[#E2E8F0] text-[14px] placeholder:text-[#94A3B8]" {...field} />
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
                                <FormLabel className="text-[13px] font-medium text-[#1E293B]">Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" />
                                        <Input type="password" placeholder="Enter your password" className="pl-10 h-11 bg-[#F8FAFC] border-[#E2E8F0] text-[14px] placeholder:text-[#94A3B8]" {...field} />
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
                                <FormLabel className="text-[13px] font-medium text-[#1E293B]">Confirm Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" />
                                        <Input type="password" placeholder="Confirm your password" className="pl-10 h-11 bg-[#F8FAFC] border-[#E2E8F0] text-[14px] placeholder:text-[#94A3B8]" {...field} />
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
                    <div className="h-px flex-1 bg-[#E2E8F0]" />
                    <p className="text-[12px] text-[#94A3B8] uppercase tracking-wide">
                        Or continue with
                    </p>
                    <div className="h-px flex-1 bg-[#E2E8F0]" />
                </div>
                <Button
                    variant={'outline'}
                    className="w-full h-11 bg-white border-[#E2E8F0] text-[#475569] font-medium hover:bg-[#F8FAFC]"
                >
                    <FcGoogle className="mr-2 h-5 w-5" />
                    Continue with Google
                </Button>
            </div>
        </div>
    );
};
export default SignUpForm