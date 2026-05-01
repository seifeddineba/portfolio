"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ThankContactCard() {

  return (
    <Card
      className="w-full h-fit max-w-sm overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102 mt-5"
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <Heart
            className={`w-12 h-12 transition-colors duration-300 ease-out text-red-500`}
          />
        </div>
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl duration-300">
          Thank you for reaching out
        </h2>
        <p className="mt-2 mb-10 font-heading text-lg text-muted-foreground">
          If you have any questions or requests, feel free to contact me.
        </p>
      </CardContent>
     
      <div
        className={`h-1 bg-gradient-to-r from-red-500 to-red-500 transition-all duration-300 ease-out "opacity-100"`}
      ></div>
    </Card>
  );
}
