"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const PredictionContent = () => {
  return (
    <Card className="bg-slate-200">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput id="name" placeholder="Aidityas" required type="text" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default PredictionContent;
