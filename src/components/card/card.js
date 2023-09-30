import styled from "styled-components"
import { Link } from 'react-router-dom';
import { Photo } from "../photo/photo";
import { H2 } from "../H2/H2";
import { Button } from "../button/button";

const CardContainer = ({ id, className, image, name, age, about }) => {

  return (
    <div className={className}>
      <Photo
        src={image}
        rounded
      />

      <H2>
        {name}
      </H2>

      <div className="age">
        Возраст: {age}
      </div>

      <p className="about">
        {about}
      </p>

      <div className="buttons">
        <Link to={`/member/${id}`}>
          <Button
            margin='0 10px 0 0'
          >
            Открыть
          </Button>
        </Link>

        {/*TODO - реализовать функцию добавления в избранное */}
        <Button>
          В избранное
        </Button>
      </div>

    </div>
  )
};

export const Card = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  border: 1px solid #707070;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 4px #707070;
  color: #707070;

  & .age {
    margin: 5px 0;
  }

  & .about {
    text-align: center;
    hyphens: auto;
    margin: 0 0 20px 0;
  }
`;