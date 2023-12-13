
import {Button} from "@/components/ui/button";
import React from "react";

export function Search() {
    return (
        <div>

            <Button
                variant="ghost"
                size="icon"
                className="h-9 w-[200px] rounded-md border"
                onClick={() => console.log("Button clicked")}
            >
                <span>Search</span>
            </Button>
        </div>
    )
}