export interface ISteps {
  number: string;
  title: string;
  items: string[];
}
export interface ProcessData {
  subtitle: string;
  title: string;
  steps: ISteps[];
}

const processData: ProcessData = {
  subtitle: "METODA NOASTRĂ",
  title: "Învățare eficientă pas cu pas",
  steps: [
    {
      number: "001",
      title: "Diagnostic",
      items: ["Evaluare completă", "Identificare puncte slabe", "Plan de studiu personalizat"],
    },
    {
      number: "002",
      title: "Învățare",
      items: ["Gramatică aplicată", "Vocabular contextual", "Conversație zilnică"],
    },
    {
      number: "003",
      title: "Perfecționare",
      items: ["Simulări examene", "Feedback constant", "Certificare garantată"],
    },
  ],
};

export default processData;
