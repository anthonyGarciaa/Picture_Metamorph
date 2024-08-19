import { useContext } from "react";
import { LanguageContext } from "@/Context";

const GettingStarted = () => {
  const {texts} = useContext(LanguageContext)
  return (
    <div className="h-max mb-16">
      <h2 className="section-title text-2xl mb-5">{texts.gettingStartedSessionName}</h2>
      <p className="w-8/12 text-lg">
        {texts.gettingStartedIntroductoryp}
      </p>
      <ol>
        <li className="mt-5">
          1⬇️
          {texts.li1Pcode}
        </li>

        <li className="mt-4">
          2⬇️
          {texts.li2Pcode}
        </li>
        <li className="mt-4">
          3⬇️
         {texts.li3Pcode}
        </li>
        <li className="mt-4">
          {texts.li4ExampleText}
          <pre className="mt-5 bg-primary-900 pl-2 pr-5 pt-2 pb-5">
            <code className="code">
              &lt;<span className="label">form</span>{" "}
              <span className="attribute">method</span>=&quot;
              <span className="value">post</span>&quot;{" "}
              <span className="attribute">encType</span>=&quot;
              <span className="value">multipart/form-data</span>&quot;&gt;
              <br /> &lt;<span className="label">label</span>{" "}
              <span className="attribute">htmlFor</span>=&quot;
              <span className="value">format</span>&quot;&gt;Select format:
              &lt;/<span className="label">label</span>&gt;
              <br />
              &lt;<span className="label">select</span>{" "}
              <span className="attribute">name</span>=&quot;
              <span className="value">format</span>&quot;{" "}
              <span className="attribute">id</span>=&quot;
              <span className="value">format</span>&quot;&gt;
              <br />
              &lt;<span className="label">option</span>{" "}
              <span className="attribute">value</span>=&quot;
              <span className="value">image/jpeg</span>&quot;&gt;.JPG&lt;/
              <span className="label">option</span>&gt;
              <br />
              &lt;<span className="label">option</span>{" "}
              <span className="attribute">value</span>=&quot;
              <span className="value">image/png</span>&quot;&gt;.PNG&lt;/
              <span className="label">option</span>&gt;
              <br />
              &lt;<span className="label">option</span>{" "}
              <span className="attribute">value</span>=&quot;
              <span className="value">image/gif</span>&quot;&gt;.GIF&lt;/
              <span className="label">option</span>&gt;
              <br />
              &lt;<span className="label">option</span>{" "}
              <span className="attribute">value</span>=&quot;
              <span className="value">image/tiff</span>&quot;&gt;.TIFF&lt;/
              <span className="label">option</span>&gt;
              <br />
              &lt;<span className="label">option</span>{" "}
              <span className="attribute">value</span>=&quot;
              <span className="value">image/webp</span>&quot;&gt;.WEBP&lt;/
              <span className="label">option</span>&gt;
              <br />
              &lt;/<span className="label">select</span>&gt;
              <br /> &lt;<span className="label">label</span>{" "}
              <span className="attribute">htmlFor</span>=&quot;
              <span className="value">file</span>&quot;&gt;Select file: &lt;/
              <span className="label">label</span>&gt;
              <br />
              &lt;<span className="label">input</span>{" "}
              <span className="attribute">name</span>=&quot;
              <span className="value">file</span>&quot;{" "}
              <span className="attribute">type</span>=&quot;
              <span className="value">file</span>&quot;
              <span className="attribute">id</span>=&quot;
              <span className="value">file</span>&quot; /&gt; <br /> &lt;
              <span className="label">input</span>{" "}
              <span className="attribute">type</span>=&quot;
              <span className="value">submit</span>&quot;{" "}
              <span className="attribute">value</span>=&quot;
              <span className="value">Submit</span>&quot; /&gt;
              <br />
              &lt;/<span className="label">form</span>&gt;
            </code>
          </pre>
        </li>
        <li className="mt-1">
          {texts.li5code}
        </li>
        <li className="mt-4">
          4⬇️
          {texts.li6Pcode}
        </li>
        <li className="mt-4">
          {texts.li7ExampleText}
          {texts.li7Pcode}
          <pre className="mt-5 bg-primary-900 pl-2 pr-5 pt-2 pb-5 mb-3">
            <code className="code">
              &lt;<span className="label">form</span>{" "}
              <span className="attribute">onSubmit</span>=
              <span className="value">{"{handleSubmit}"}</span>{" "}
              <span className="attribute">method</span>=&quot;
              <span className="value">post</span>&quot;{" "}
              <span className="attribute">encType</span>=&quot;
              <span className="value">multipart/form-data</span>&quot;&gt;
            </code>
          </pre>
          <p>
          ************OR************
          </p>
          <pre className="mt-5 bg-primary-900 pl-2 pr-5 pt-2 pb-5 mb-3">
            <code className="code">
              <span className="blue">const</span>{" "}
              <span className="cyan">form</span> ={" "}
              <span className="rust-green">document</span>.
              <span className="orange">querySelector</span>
              <span className="blue">{"("}</span>
              <span className="interpolation-red">&quot;form&quot;</span>
              <span className="blue">{")"}</span>;
              <br />
              <span className="cyan">form</span>.
              <span className="orange">addEventListener</span>
              <span className="blue">{"("}</span>
              <span className="interpolation-red">&quot;submit&quot;</span>,
              <span className="orange">handleSubmit</span>
              <span className="blue">{")"}</span>
            </code>
          </pre>
          <p className="text-base">handleSubmit:</p>
          <pre className="mt-5 bg-primary-900 pl-2 pr-5 pt-2 pb-5 mb-3">
            <code className="code">
              <span className="blue">function</span>{" "}
              <span className="orange">handleSubmit</span> ={" "}
              <span className="purple">{"("}</span>e
              <span className="purple">{")"}</span>
              <span className="purple">{"{"}</span>
              <br />
              <span className="blue">const</span>{" "}
              <span className="cyan">dataFormulario</span> ={" "}
              <span className="blue">new</span>{" "}
              <span className="green">FormData</span>
              <span className="blue">{"("}</span>
              <span className="rust-green">e.target</span>
              <span className="blue">{")"}</span>;<br />
              <span className="orange">fetch</span>
              <span className="blue">{"("}</span>
              <span className="interpolation-red">
                &quot;http://localhost:5000/getPicture&quot;
              </span>
              ,<span className="orange">{"{"}</span>
              <br /> <span className="rust-green">method:</span>{" "}
              <span className="interpolation-red">&quot;POST&quot;</span>,<br />{" "}
              <span className="rust-green">body:</span>{" "}
              <span className="cyan">dataFormulario</span>,<br />
              <span className="orange">{"}"}</span>
              <span className="blue">{")"}</span>
              <br /> .<span className="orange">then</span>
              <span className="blue">{"("}</span>
              <span className="orange">{"("}</span>
              <span className="rust-green">res</span>
              <span className="orange">{")"}</span>{" "}
              <span className="blue">=&gt;</span>{" "}
              <span className="orange">{"{"}</span>
              <br />
              {"   "}
              <span className="purple">if</span>{" "}
              <span className="purple">{"("}</span>
              <span className="rust-green">res</span>.
              <span className="cyan">ok</span>{" "}
              <span className="purple">{")"}</span>{" "}
              <span className="purple">{"{"}</span> <br />
              {"    "}
              <span className="purple">return</span>{" "}
              <span className="rust-green">res</span>.
              <span className="orange">json</span>
              <span className="blue">{"()"}</span>;<br />
              <span className="purple">{"}"}</span>
              <span className="purple">else</span>{" "}
              <span className="red">throw</span>{" "}
              <span className="rust-green">res</span>
              <br />
              <span className="orange">{"}"}</span>
              <span className="blue">{")"}</span>
              <br /> .<span className="orange">then</span>
              <span className="blue">{"("}</span>
              <span className="orange">{"("}</span>
              <span className="rust-green">json</span>
              <span className="orange">{")"}</span>{" "}
              <span className="blue">=&gt;</span>{" "}
              <span className="orange">{"{"}</span>
              <br />
              {"   "}
              <span className="cyan">console</span>.
              <span className="orange">log</span>
              <span className="blue">{"("}</span>
              <span className="orange">json</span>
              <span className="blue">{")"}</span>
              <br />
              <span className="orange">{"}"}</span>
              <span className="blue">{")"}</span>
              <br />.<span className="orange">catch</span>
              <span className="blue">{"("}</span>
              <span className="orange">{"("}</span>
              <span className="rust-green">err</span>
              <span className="orange">{")"}</span>{" "}
              <span className="blue">=&gt;</span>{" "}
              <span className="orange">{"{"}</span>
              <br />
              {"  "}
              <span className="cyan">console</span>.
              <span className="orange">log</span>
              <span className="blue">{"("}</span>
              <span className="rust-green">err</span>
              <span className="blue">{")"}</span>;<br />
              <span className="orange">{"}"}</span>
              <span className="blue">{")"}</span>;
            </code>
          </pre>
        </li>
        <li>
          <p className="text-xl">{texts.responses1P}</p>
          <p>200 OK:</p>
          <pre>
            <code>
              {`  
            {
            error: false,
            ok: true,
            statusText: "Ok",
            message: "Ok: The files were successfully converted",
            data: 
            [
            {name:file_example1.png, base64:<Base 64 encoded file>},
            {name:file_example1.png, base64:<Base 64 encoded file>},
            {name:file_example1.png, base64:<Base 64 encoded file>}
            ]
            }  
            `}
            </code>
          </pre>
          {texts.responses2Pcode}
          <p>400 Bad Request:</p>
          {texts.responses3Pcode}
          <pre>
            <code>
              {`  
              {
              error: true,
              ok: false,
              statusText: "Bad Request",
              message: "Bad Request: Images must be submitted",
              } 
            `}
            </code>
          </pre>
            {texts.responses4Pcode}
          <pre>
            <code>
              {`  
              {
              error: true,
              ok: false,
              statusText: "Bad Request",
              message: "Bad Request: A valid format of images must be specified"
              }
            `}
            </code>
          </pre>
          {texts.responses5Pcode}
          <pre>
            <code>
              {`  
           {
            error: true,
            ok: false,
            statusText: "Bad Request",
            message: "Bad Request: 'files' must have a valid image format",
          }
            `}
            </code>
          </pre>
          
        </li>
      </ol>
    </div>
  );
};

export default GettingStarted;
