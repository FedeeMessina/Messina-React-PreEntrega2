import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  
  return (
    <div key={id}>
      <Card className="cardContainer" maxW="sm">
        <CardBody className="cardProduct">
          <Image
            className="cardImage"
            src={producto.imagen}
            alt=""
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{producto.nombre}</Heading>
            <Text>{producto.descripcion}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${producto.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <ItemCount />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;