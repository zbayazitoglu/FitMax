import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

function BMI() {
  const [bmi, setBmi] = useState();

  const [bodyData, setBodyData] = useState({
    age: 30,
    height: 150,
    weight: 50,
  });

  useEffect(() => {
    setBodyData({
      age: 30,
      height: 150,
      weight: 60,
    });
    const options = {
      method: "GET",
      url: "https://fitness-calculator.p.rapidapi.com/bmi",
      params: {
        age: bodyData.age,
        weight: bodyData.weight,
        height: bodyData.height,
      },
      headers: {
        "X-RapidAPI-Key": "48ed8b2f2fmsha28be52d7e6d3d5p1ee835jsn72ba2cbb6727",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setBmi(response.data.data.bmi);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [bodyData.age, bodyData.height, bodyData.weight]);

  return (
    <div>
      <div className="flex flex-row justify-center  items-center gap-20">
        <Card className="w-min bg-indigo-800 mt-12 ml-12 p-1">
          <CardHeader
            variant="gradient"
            className="grid h-8 text-xl font-bold place-items-center border-2 border-indigo-800  bg-indigo-50 text-indigo-800"
          >
            {" "}
            BMI
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="flex flex-row justify-center gap-4">
          <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-indigo-50 text-xl"
                  >
                    Age
            </Typography>
            <Input  className="text-indigo-50" />
            </div>
            <div className="flex flex-row justify-center gap-4">
          <Typography
                    variant="small"
                    color="blue-gray"
                    className=" font-medium text-indigo-50 text-xl"
                  >
                    Weight
            </Typography>
            <Input  className="text-indigo-50" />
            </div>
            <div className="flex flex-row justify-center gap-4">
          <Typography
                    variant="small"
                    color="blue-gray"
                    className=" font-medium text-indigo-50 text-xl"
                  >
                    Height
            </Typography>
            <Input  className="text-indigo-50" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth className="text-indigo-800 bg-indigo-50">
              Calculate my BMI
            </Button>
          </CardFooter>
        </Card>

        <div className=" h-10  pt-1 border-2 border-indigo-800 rounded-lg px-8 max-w-1">
          {bmi}
        </div>
      </div>
      <div className="md:flex flex-row justify-center  items-center gap-20 flex-nowrap mt-14">
           <div className="box-border h-32 w-64 p-4 border-4 border-pink-200 bg-pink-300 ">
            <p>Underweight</p>
            <p>Below 18.5</p>
           </div>
           <div className="box-border h-32 w-64 p-4 border-4 border-green-200 bg-green-400">
            <p>Healthy Weight</p>
            <p>18.5—24.9</p>
           </div>
           <div className="box-border h-32 w-64 p-4 border-4 border-orange-200 bg-orange-500 ">
            <p>Overweight</p>
            <p>25.0—29.9</p>
           </div>
           <div className="box-border h-32 w-64 p-4 border-4 border-red-200 bg-red-600">
            <p>Obesity</p>
            <p>30.0 and Above</p>
           </div>
      </div>
      
    </div>
  );
}

export default BMI;

