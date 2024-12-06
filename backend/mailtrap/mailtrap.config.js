import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = "0df1cbace0cff82481761d5519e9b0be";


export const mailTrapClient = new MailtrapClient({
    token: TOKEN,
});

export const sender = {
    email: "hello@demomailtrap.com",
    name: "MohamedsHafid",
};
