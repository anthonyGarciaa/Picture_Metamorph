"use client";
import GettingStarted from "@/components/GettingStarted";
import { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const textTemplates = {
    en: {
      homeTitle: `Converter of images to any standarized format of images`,
      apiHomeTitle: "API",
      apiHomeSubTitle: "Use Picture Metamorph as an api",
      contactHomeTitle: "CONTACT",
      contactHomeSubtitle: "Contact me",
      useHomeTitle: "Use",
      useHomeSubtitle: "Use picture metamorph from the official site",
      headerUse: "Use",
      headerApi: "Api",
      headerContact: "Contact",
      headerEs:'Spanish',
      headerEn:'English',
      useLabel: "Select the format you want to convert to:",
      depositLabelText: "Select the images to convert:",
      depositLabelTextLoading: "Loading...",
      depositLabelTextServerError:
        "Error when converting images, try again later",
      submitBtn: "convert",
      gettingStartedSessionName: "Getting Started",
      gettingStartedIntroductoryp:
        "To start using picture metamorph as an API we must follow the following steps:",
      whatIsItSessionName: "What is it",
      whatIsItntroductoryp:
        "Picture metamorph API is a REST service that allows you to use the PIM (Picture metamorph) by working with forms (for now)",
      li1Pcode: (
        <p>
          We must set in a previously created html document a{" "}
          <code className="bg-primary-50">form</code> Tag with attribute-value
          pairs: <code className="bg-primary-50">method=&#34;post&#34;</code>{" "}
          and{" "}
          <code className="bg-primary-50">
            encType=<br />&#34;multipart/form-data&#34;
          </code>
        </p>
      ),
      li2Pcode: (
        <p>
          Inside this <code className="bg-primary-50">form</code> tag created in
          the previous step We must establish an{" "}
          <code className="bg-primary-50">input</code> tag of{" "}
          <code className="bg-primary-50">type=&#34;select&#34;</code> in which
          the format to which you want to convert and that in its{" "}
          <code className="bg-primary-50">name</code> attribute it has the value{" "}
          <code className="bg-primary-50">&#34;format&#34;,</code> and also that
          the tags <code className="bg-primary-50">option</code> that encloses
          have set as values of its{" "}
          <code className="bg-primary-50">attributes value</code> a string that
          references a mimeType valid of images, example:{" "}
          <code className="bg-primary-50">value=&#34;image/gif&#34;</code>
        </p>
      ),
      li3Pcode: (
        <p>
          Then let&apos;s set inside the{" "}
          <code className="bg-primary-50">form</code> tag, for last an{" "}
          <code className="bg-primary-50">input</code> tag
          <code className="bg-primary-50">type=&#34;file&#34;</code> that has
          its attribute <code className="bg-primary-50">name</code> the{" "}
          <code className="bg-primary-50">value &#34;file&#34;</code>
        </p>
      ),
      li4ExampleText: "example",
      li5code: (
        <>
          {" "}
          <p className="mb-2">
            In the input{" "}
            <code className="bg-primary-50">type=&quot;file&quot;</code> We can
            and should establish:
          </p>
          <ul>
            <li>
              <p className="mb-1">
                -the <code className="bg-primary-50">multiple</code> attribute
                with the value{" "}
                <code className="bg-primary-50">&quot;true&quot;</code> in case
                we want to Convert more than one image.
              </p>
            </li>
            <li>
              <p className="mb-1">
                -the <code className="bg-primary-50">accept</code> attribute to
                specify the formats of valid files and thus ensure that we send
                files with valid formats to the server taking into account that
                Picture metamorph works with extension files .jpeg, .png, .webp,
                .gif, .tiff
              </p>
            </li>
            <li>
              <p>
                -The attribute <code className="bg-primary-50">requires</code>{" "}
                so that a shipment is not made of empty input
              </p>
            </li>
          </ul>
        </>
      ),
      li6Pcode: (
        <p>
          Now with setting the attribute-value pair{" "}
          <code className="bg-primary-50">
            action=<br/>&quot;https://picture-metamorph-api.vercel.app/getPicture&quot;{" "}                   
          </code>
          the form would be submitted and processed on the server, however it
          would not It would be useless if only the information returned by the
          API, so we will have to consume the API, by{" "}
          <code className="bg-primary-50">XMLHttpRequest</code>,{" "}
          <code className="bg-primary-50">fetch</code> or{" "}
          <code className="bg-primary-50">axios</code> in Picture metamorph we
          usually decline to use <code className="bg-primary-50">Fetch</code>
        </p>
      ),
      li7ExampleText: "Example of use using fetch:",
      li7Pcode: (
        <p>
          First we must establish a handling function for the event Form Submit
          via Javascript, either by applying the event handler directly on the
          label in case we are using any reactive framework of the same
          Javascript or assigning
          <br /> the event handler by handling the DOM in javascript
        </p>
      ),
      responses1P: "Respuestas",
      responses2Pcode: (
        <p className="mb-3">
          the property <code className="bg-primary-50">data</code> contains a
          Object array with an object For every image that is sent to the
          server, this object has a property{" "}
          <code className="bg-primary-50">name</code> than as value has the file
          name with its new extension. and a property{" "}
          <code className="bg-primary-50">base64</code> which its value is a
          base64 encoding of the image in its new format, if the{" "}
          <code className="bg-primary-50">input</code> from{" "}
          <code className="bg-primary-50">type=&quot;file&quot;</code> is sent
          empty Returns the same answer without the{" "}
          <code className="bg-primary-50">data property</code>.
        </p>
      ),
      responses3Pcode: (
        <p>
          - when the <code className="bg-primary-50">input</code> of{" "}
          <code className="bg-primary-50">type=&quot;file&quot;</code> and{" "}
          <code className="bg-primary-50">
            name=&quot;file&quot; is not sent
          </code>
        </p>
      ),
      responses4Pcode: (
        <p>
          - when the <code className="bg-primary-50">input</code> is not sent
          from <code className="bg-primary-200&">type=&quot;select&quot;</code>{" "}
          and <code className="bg-primary-50">name=&quot;format&quot;</code>
          or is not a valid format that is sent as the value of the input
        </p>
      ),
      responses5Pcode: (
        <p>
          {" "}
          - when a file with an invalid format is sent in the{" "}
          <code className="bg-primary-50">input</code>
          from <code className="bg-primary-50">
            type=&quot;file&quot;
          </code> y{" "}
          <code className=";bg-primary-200">name=&quot;file&quot;</code>
        </p>
      ),
      contactNameLabel:'Enter your name',
      contactEmailLabel:'Enter your email',
      contactTextareaLabel:'leave me your comments',
      contactSend:"Send",
      contactNameIsRequired:"The name field is required",
      contactEmailIsRequired:"The email field is required",
      contactCommentIsRequired:"A comment must be sent",
      contactInvalidName:"Name only accepts letters and blank spaces",
      contactInvalidEmail:"Invalid email",
      contactSuccessMessage:"Comment sent successfully",
      contactFailedMessage:"Error sending comment, try again later",    
      allRightsReserved:<p>All rights reserved © 2024 <b>PictureMetamorph</b></p>

    },
    es: {
      homeTitle: `Convertidor de imagenes a cualquier formato estandarizado de imagenes `,
      apiHomeTitle: "API",
      apiHomeSubTitle: "Usar Picture Metamorph como API",
      contactHomeTitle: "CONTACT",
      contactHomeSubtitle: "Contacta conmigo",
      useHomeTitle: "Usar",
      useHomeSubtitle: "Usar picture metamorph desde el sitio oficial",
      headerUse: "Usar",
      headerApi: "Api",
      headerContact: "Contacto",
      headerEs:'Español',
      headerEn:'Ingles',
      useLabel: "Seleccione el formato al que desea convertir:",
      depositLabelText: "Seleccione las imágenes a convertir:",
      depositLabelTextLoading: "Cargando...",
      depositLabelTextServerError:
        "Error al convertir imágenes, inténtelo de nuevo más tarde",
      submitBtn: "convertir",
      gettingStartedSessionName: "Empezar",
      gettingStartedIntroductoryp:
        "Para comenzar a usar picture metamorph como API debemos seguir los siguientes pasos:",
      whatIsItSessionName: "Que es",
      whatIsItntroductoryp:
        "Picture metamorph API es un servicio REST que permite utilizar la funcionalidad de PIM (Picture metamorph) mediante el trabajo con formularios(por ahora)",
      li1Pcode: (
        <p>
          Debemos establecer en un documento html previamente creado una
          etiqueta <code className="bg-primary-50">form</code>
          con las parejas de atributo-valor:{" "}
          <code className="bg-primary-50">method=&#34;post&#34;</code> y{" "}
          <code className="bg-primary-50">
            encType=<br/>&#34;multipart/form-data&#34;
          </code>
        </p>
      ),
      li2Pcode: (
        <p>
          Dentro de esta etiqueta <code className="bg-primary-50">form</code>{" "}
          creada en el paso anterior debemos establecer una etiqueta{" "}
          <code className="bg-primary-50">input</code> de{" "}
          <code className="bg-primary-50">type=&#34;select&#34;</code> en la
          cual se establecera el formato al cual se quiere convertir y que en su
          atributo <code className="bg-primary-50">name</code> tenga el valor{" "}
          <code className="bg-primary-50">&#34;format&#34;</code>, y ademas que
          las etiquetas <code className="bg-primary-50">option</code> que
          encierre tengan establecido como valores de sus atributos{" "}
          <code className="bg-primary-50">value</code> una cadena que referencie
          un mimeType de imagen valido, ejemplo:{" "}
          <code className="bg-primary-50">value=&#34;image/gif&#34;</code>
        </p>
      ),
      li3Pcode: (
        <p>
          Luego establcemos dentro de la etiqueta{" "}
          <code className="bg-primary-50">form</code> por ultimo una estiqueta{" "}
          <code className="bg-primary-50">input</code>
          de <code className="bg-primary-50">type=&#34;file&#34;</code> que
          tenga como valor de su atributo{" "}
          <code className="bg-primary-50">name</code> el valor{" "}
          <code className="bg-primary-50">&#34;file&#34;</code>
        </p>
      ),
      li4ExampleText: "ejemplo",
      li5code: (
        <>
          {" "}
          <p className="mb-2">
            En el input{" "}
            <code className="bg-primary-50">type=&quot;file&quot;</code>Podemos
            y deberiamos establecer:
          </p>
          <ul>
            <li>
              <p className="mb-1">
                -el atributo <code className="bg-primary-50">multiple</code> con
                el valor <code className="bg-primary-50">&quot;true&quot;</code>{" "}
                en caso de que queramos convertir mas de una imagen.
              </p>
            </li>
            <li>
              <p className="mb-1">
                -el atributo <code className="bg-primary-50">accept</code> para
                especificar los formatos de archivos validos y asi asegurarnos
                de que enviamos archivos con formatos validos al servidor
                teniendo en cuenta que Picture metamorph trabaja con archivos de
                extencion .jpeg, .png, .webp, .gif, .tiff
              </p>
            </li>
            <li>
              <p>
                -el atributo <code className="bg-primary-50">require</code> para
                que no se haga un envio del input vacio
              </p>
            </li>
          </ul>
        </>
      ),
      li6Pcode: (
        <p>
          Ahora con establecer la pareja de atributo-valor{" "}
          <code className="bg-primary-50">
            action=<br/>&quot;https://picture-metamorph-api.vercel.app/getPicture&quot;{" "}                    
          </code>
          se enviaria y procesaria el formulario en el servidor, sin embargo no
          serviria de nada si solo se envia y no se recepciona la informacion
          que devuelve la API, por tanto tendremos que hacer consumo de la API,
          mediante <code className="bg-primary-50">XMLHttpRequest</code>,{" "}
          <code className="bg-primary-50">fetch</code> o{" "}
          <code className="bg-primary-50">axios</code>
          en Picture metamorph solemos declinarnos por el uso de{" "}
          <code className="bg-primary-50">fetch</code>
        </p>
      ),
      li7ExampleText: "Ejemplo de uso mediante fetch:",
      li7Pcode: (
        <p>
          Primero debemos establecer una funcion manejadora para el evento
          submit del formulario mediante Javascript, ya sea aplicando el
          manejador del evento directamente en la etiqueta en caso de que
          estemos usando algun framework reactivo del mismo Javascript o
          asignando el manejador del evento mediante el manejo del DOM en
          Javascript , ejemplos:
        </p>
      ),
      responses1P: "Respuestas",
      responses2Pcode: (
        <p className="mb-3">
          la propiedad <code className="bg-primary-50">data</code> contiene un
          array de objetos con un objeto por cada imagen que se envia al
          servidor, este objeto tiene una propiedad{" "}
          <code className="bg-primary-50">name</code> que como valor tiene el
          nombre del archivo con su nueva extencion. y una propiedad{" "}
          <code className="bg-primary-50">base64</code> la cual su valor es una
          codificacion en base64 de la imagen en su nuevo formato, si se envia
          el <code className="bg-primary-50">input</code> de{" "}
          <code className="bg-primary-50">type=&quot;file&quot;</code> vacio
          devuelve la misma respuesta sin la propiedad{" "}
          <code className="bg-primary-50">data</code>.
        </p>
      ),
      responses3Pcode: (
        <p>
          - cuando no se envia el <code className="bg-primary-50">input</code>{" "}
          de <code className="bg-primary-50">type=&quot;file&quot;</code> y{" "}
          <code className="bg-primary-50">name=&quot;file&quot;</code>
        </p>
      ),
      responses4Pcode: (
        <p>
          - cuando no se envia el <code className="bg-primary-50">input</code>{" "}
          de <code className="bg-primary-50">type=&quot;select&quot;</code> y{" "}
          <code className="bg-primary-50">name=&quot;format&quot;</code>o no es
          un formato valido el que se envia como valor del input
        </p>
      ),
      responses5Pcode: (
        <p>
          {" "}
          - cuando se envia un archivo con un formato invalido en el{" "}
          <code className="bg-primary-50">input</code>
          de <code className="bg-primary-50">type=&quot;file&quot;</code> y{" "}
          <code className="bg-primary-50">name=&quot;file&quot;</code>
        </p>
      ),
      contactNameLabel:'Ingresa tu nombre',
      contactEmailLabel:'Ingresa tu correo',
      contactTextareaLabel:'Déjame tus comentarios',
      contactSend:'Enviar',
      contactNameIsRequired:"El campo nombre es requerido",
      contactEmailIsRequired:"El campo email es requerido",
      contactCommentIsRequired:"Debe ser enviado algun comentario",
      contactInvalidName:"Nombre sólo acepta letras y espacios en blanco",
      contactInvalidEmail:"Email incorrecto",
      contactSuccessMessage:"Comentario enviado exitosamente",
      contactFailedMessage:"Error al enviar el comentario, intente mas tarde",
      allRightsReserved:<p>Todos los derechos reservados © 2024 <b>PictureMetamorph</b></p>
    },
  };

  const [language, setLanguage] = useState("en");
  const [texts, setTexts] = useState(textTemplates[language]);

  const data = { language, setLanguage, texts, setTexts, textTemplates };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

const SectionContext = createContext();

const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("What is it");

  const data = { currentSection, setCurrentSection };
  return (
    <SectionContext.Provider value={data}>{children}</SectionContext.Provider>
  );
};

export { LanguageContext, LanguageProvider, SectionContext, SectionProvider };
