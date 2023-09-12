'use client';

import React, { useEffect, useState } from 'react';
import Container from '../Container';
import { Input } from '../ui/input';
import InputFile from '../InputFile';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function SectionHero() {
  const [documento, setDocumento] = useState(null);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');

  useEffect(() => {
    window.addEventListener('keydown', handleLimparDados);

    return () => {
      window.removeEventListener('keydown', handleLimparDados);
    };
  }, []);

  function handleLimparDados(event) {
    event.key === 'Escape' && setDocumento(null);
  }

  //<Accordion type="single" collapsible>
  //<AccordionItem value="item-1">
  // <AccordionTrigger>
  //   Veja o que você pode fazer clicando aqui!
  // </AccordionTrigger>
  //  <AccordionContent>ESC: Limpar campos</AccordionContent>
  //  </AccordionItem>
  // </Accordion>

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <Container className="flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-10 mb-12">
          <Input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            nomeLabel="Nome"
            placeholder="Nome"
          />
          <Input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            nomeLabel="CPF"
            placeholder="___.___.___-__"
          />
          <Input
            type="text"
            id="birthdate"
            value={dataNascimento}
            onChange={(event) => setDataNascimento(event.target.value)}
            nomeLabel="Data de Nascimento"
            placeholder="__/__/____"
          />
          <Input
            type="text"
            id="dataVenc"
            value={dataVencimento}
            onChange={(event) => setDataVencimento(event.target.value)}
            nomeLabel="Data de Vencimento"
            placeholder="__/__/____"
          />
        </div>
        <div
          className={`relative cursor-pointer w-full max-w-[500px] h-[200px] border-[4px] border-dashed ${
            documento ? 'border-[green]' : 'border-[#FBF9FE]'
          } flex items-center justify-center`}
        >
          <p className="text-[#FBF9FE] text-xl absolute z-1">
            {documento ? documento[0].name : 'CLIQUE EM MIM 😍'}
          </p>
          <InputFile
            type="file"
            onChange={(event) => setDocumento(event.target.files)}
            className={'cursor-pointer'}
            accept=".png, .jpg"
          />
        </div>
      </Container>
    </section>
  );
}
