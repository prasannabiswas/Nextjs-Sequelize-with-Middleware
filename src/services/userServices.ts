import { Member } from "@/lib/connection/connection";
import bcrypt from "bcryptjs";
import { z } from "zod";


export const signupUser = async (email: string, password: string, name: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = await Member.create({
      email,
      password: hashedPassword,
      name,
    });
  
    return user;
  };
  
  export const loginUser = async (email: string, password: string) => {
    const user = await Member.findOne({ where: { email } });
  
    if (!user) throw new Error('User not found');
  
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Invalid credentials');
  
    return user;
  };