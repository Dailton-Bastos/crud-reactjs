import React from 'react';
import Main from '../template/Main';
import { FaHome } from 'react-icons/fa';

const Home = () => {
  return (
    <Main icon={<FaHome />} title="Alacritech" subtitle="Feito Para Você.">
      <div>
        Bem Vindo
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa
          at, obcaecati dolore similique dolorem animi tenetur. Cum dolor
          expedita numquam ullam dolore, nobis, iure, illo dolorem magnam alias
          eveniet.
        </p>
      </div>
    </Main>
  );
};

export default Home;
