import React, { useState } from "react";

interface Props {
  name: string;
}
const HelloWorld: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ fullName: string | null }>({ fullName: "string" });
  //state.name; // error TS

  return <div>hello {name}</div>;
};

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

// We have to extend T with object {} so T will be at least object
const Form = <T extends {}>({ children, values }: FormProps<T>) => {
  return children(values);
};

const App = () => {
  /*

  Main point that we can pass any params to Form => values
  and it will be possible to get it from children render => values

  */
  return (
    <div>
      App
      <Form<{ firstName: string | null }> values={{ firstName: "bob" }}>
        {(values) => <div>Hello {values?.firstName}</div>}
      </Form>
    </div>
  );
};

export default App;
