"use client";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {logInSchema, LogInData} from '../../schema';
import {Input} from '../ui/input';
import {Button} from '../ui/button';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/form';
import {Mail, Lock,} from 'lucide-react';
import {FcGoogle} from 'react-icons/fc';


export const LogInForm = () =>{
    const form = useForm<LogInData>({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: LogInData) => {
        console.log(data);
        form.reset();
    } 

    return (
        <div className="space-y-6">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input type="email" placeholder="name@company.com" className="pl-[40px] pt-[11px] pb-[12px] pr-[12px] bg-[#faf8fc]" {...field} />
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input type="password" placeholder="Enter your password" className="pl-[40px] pt-[11px] pb-[12px] pr-[12px] bg-[#faf8fc]" {...field} />
                                </div>  
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='w-full px-4 py-2.5'>Sign In</Button>
            </form>
        </Form>
        <p className="text-center text-[#94A3B8] text-[12px]  font-normal tracking-[0.6px]">OR CONTINUE WITH GOOGLE</p>
        <Button variant={'outline'} size={'lg'} className="w-full bg-transparent" >
            <FcGoogle className="mr-2 h-4 w-4 size={20}" />
            Continue with Google</Button>

        <p className="text-center">Don&apos;t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
    </div>
    )

}