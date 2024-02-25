import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import { AiFillMedicineBox } from "react-icons/ai";
export default function App() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image />
        <AiFillMedicineBox />
        <div className="flex flex-col">
          <p className="text-md">Paracetamol</p>
          <p className="text-small text-default-500">08.00,Setelah Makan</p>
        </div>
      </CardHeader>
    </Card>
  );
}
