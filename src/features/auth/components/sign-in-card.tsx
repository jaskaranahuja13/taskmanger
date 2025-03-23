import { DottedSeparator } from "@/components/dotted-seperator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const SignInCard= () =>{
    return(
        <Card className="w-full h-full md:w-[487px] border-none shadow-none" >
            <CardHeader className="flex items-center justify-center text-center shadow-none">
                <CardTitle className="text-2xl">Sign in to your account</CardTitle>
                    
        </CardHeader>
        <div className="px-7 ">
            <DottedSeparator/>
        </div>
        </Card>
    );
};


