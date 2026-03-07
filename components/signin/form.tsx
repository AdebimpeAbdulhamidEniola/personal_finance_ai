"use client";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {logInSchema, LogInData} from '../../schema';
import {Input} from '../ui/input';
import {Button} from '../ui/button';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/form';
import {Mail, Lock,} from 'lucide-react';
import {FcGoogle} from 'react-icons/fc';
import Link from 'next/link';
import { useLogin } from '@/hooks/query-hook';
import {toast} from 'sonner';

export const LogInForm = () =>{
    const {mutateAsync: loginUser, isPending} = useLogin();
    
    const form = useForm<LogInData>({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async(formData: LogInData) => {
        try {
            await loginUser(formData)
            console.log("Login successful")
            
            if (typeof window !== undefined) 
                toast.success("Login successful")
        } catch (error) {
            console.log("Login failed", error)
            if (typeof window !== undefined) 
                toast.error("Login Failed")
        }
    }

    return (
        <div className="flex flex-col flex-1">
        {/* main inputs and buttons at top */}
        <div className="space-y-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
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
                            <FormItem>
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
                    <div className="pt-2">
                        <Button 
                            type="submit" 
                            className='w-full h-11 text-[14px] font-semibold tracking-wide shadow-sm cursor-pointer hover:opacity-90 transition-opacity'
                            disabled={isPending}
                        >
                            {isPending ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Signing In...
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
            
            <div className="flex items-center gap-3 mt-8 mb-6">
                <div className="h-[1px] flex-1 bg-[var(--finance-slate-border)]"></div>
                <p className="text-center text-[var(--finance-slate-light)] text-[11px] font-medium tracking-wider uppercase">Or continue with google</p>
                <div className="h-[1px] flex-1 bg-[var(--finance-slate-border)]"></div>
            </div>
            
            <Button 
                variant={'outline'} 
                className="w-full h-11 bg-white border-[var(--finance-slate-border)] text-[var(--finance-slate-dark)] font-medium hover:bg-[var(--finance-gray-light)] cursor-pointer" 
            >
                <FcGoogle className="mr-2 h-5 w-5" />
                Continue with Google
            </Button>
        </div>
        {/* sign up link pinned to bottom */}
        <p className="text-center mt-auto pb-6 md:mt-4 md:pb-0">Don&apos;t have an account? <Link href="/signup" className="text-blue-500 hover:underline cursor-pointer">Sign Up</Link></p>
    </div>
    )

}