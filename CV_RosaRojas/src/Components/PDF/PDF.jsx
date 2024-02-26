import React from "react";
import { Document, Page, PDFDownloadLink, Text, View } from '@react-pdf/renderer';
import Tarjeta from "../Tarjeta/Tarjeta";
const MyCVRosa = () => {

    const habilidadesitems = [
        { id: 2, text: "LINUX" },
        { id: 3, text: "HTML" },
        { id: 4, text: "CSS" },
        { id: 5, text: "JS" },
        { id: 6, text: "POSTGRESQL" },
        { id: 7, text: "GIT" },
        { id: 8, text: "GIT HUB" },
        { id: 9, text: "REACT" },
      ];
      const contactoitems = [
        { id: 2, text: "Magdalena Contreras, CDMX."},
        { id: 3, text: "5656565656" },
        { id: 4, text: "rosa@gmail.com" },
      ];
      const idiomasitems = [
        { id: 2, text: "INGLÉS" },
      ];
      const formacionesadicionalesitems = [
        { id: 2, text: "Comandos DML: Manipulación de datos con MySQL" },
        { id: 3, text: "Procedures SQL: Ejecutando código con MySQL" },
        { id: 4, text: "MySQL Server: Seguridad y optimización de base de datos" },
        { id: 5, text: "Business Agility"}
      ];
      const sobremiitems = [
        { id: 1, text: "SOBRE MÍ" },
        { id: 2, text: "Mi nombre es Rosa Isela Rojas, Ingeniera en Informática por el Instituto Tecnológico de Tláhuac III. Profesionalmente he sido Tallerista de Escuela de Código en la SECTEI de la CDMX; formé parte del Bootcam Skills for Woman in Tech, organizado por Hackademy y la embjada de Reino Unido y recientemente me desarrollé como becaria en sistemas para la empresa “Sólo Talento”. Asimismo participé en el programa de Oracle, Next Education, con la especialización en Frontend." }
      ];
    
  return (
    <Document>
      <Page>
        <View>
        <Text>Rosa Isela Rojas</Text>
          <Text>CONTACTO</Text>
          {contactoitems.map(item => (
            <Text key={item.id}>{item.text}</Text>
          ))}
          <Text>IDOMAS</Text>
          {idiomasitems.map(item => (
            <Text key={item.id}>{item.text}</Text>
          ))}
          <Text>HABILIDADES</Text>
          {habilidadesitems.map(item => (
            <Text key={item.id}>{item.text}</Text>
          ))}
          <Text>FORMACIONES ADICIONALES</Text>
          {formacionesadicionalesitems.map(item => (
            <Text key={item.id}>{item.text}</Text>
          ))}
          <Text>SOBRE MÍ</Text>
          {sobremiitems.map(item => (
            <Text key={item.id}>{item.text}</Text>
          ))}
            <Tarjeta
        titulo="EXPERIENCIA"
        titulo2="SOLO TALENTO"
        titulo3="MAYO 2023 - ENERO 2024 "
        titulo4="Becaria de Sistemas"
        texto="Becaria de sistemas para desarrollo, diseño e implementación de su portal web, realizado con los siguientes lenguajes: Node.js, MySQL, React.js, CSS Y HTML. Desarrollé el diseño y modelado de bases de datos, la creación de interfaces y la creación de API’s. Manejé el control de versiones con Git y GitHub."
      />
         <Tarjeta
        titulo="ONE ORACLE NEXT EDUCATION"
        titulo2="MARZO 2023 - SEPTIEMBRE 2023"
        titulo3="Alumni ONE Latam"
        texto="Becaria Frontend, realizando “challenges”, proyectos en los que se aplican las formaciones: principiante en programación, React, Frontend, formación en HTML y CSS, formación de Busis- ness Agility, emprendimiento y formación de desarrollo person- al."
      />
      <Tarjeta
        titulo="BOOTCAMP SKILLS FOR WOMAN IN TECH"
        titulo2="ENERO 2022 - AGOSTO 2022"
        titulo3="Padawan Backend"
        texto="Becaria del programa Skill for Woman in Thech, programa de la embajada del Reino Unido y Hackademy dirigido a capacitar a mujeres en México en habilidades tecnológicas, soft kills y per- spectiva de género. Manejo de lenguaje Node.js, Diseño y mod- elado de base de datos, manejo de ORM, manejo de Git/GitHub, manejo de línea de comandos, manejo de Docker y creación de API’s."
      />
      <Tarjeta
        titulo="SECRETARÍA DE EDUCACIÓN, CIENCIA, TECNOLOGÍA E INNOVACIÓN DE LA CDMX"
        titulo2="SEPTIEMBRE 2020 - DICIEMBRE 2021"
        titulo3="Tallerista de Escuela de Código"
        texto="Participé como tallerista de “Escuela de Código” en PILARES, per- tenecientes a la Secretaría de Educación, Ciencia, Tecnología e Innovación de la CDMX, impartiendo talleres de Linux básico y Desarrollo de páginas web con lenguaje CSS, HTML y JS."
      />
        </View>
      </Page>
    </Document>
  );
};

const PDF = () => {
  return (
    <div>
      <PDFDownloadLink document={<MyCVRosa  />} fileName="CV Rosa Isela Rojas">
        {({ loading, url, error }) => (loading ? <button>Cargando documento..</button> : <button>Descargar ahora</button>)}
      </PDFDownloadLink>
    </div>
  );
};

export default PDF;