import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type ContactUsField = {
  name: string;
  email: string;
  message: string;
};

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório."),
  email: Yup.string().email("E-mail inválido").required("O e-mail é obrigatório."),
  message: Yup.string().required("A mensagem é obrigatória."),
});

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });

  function onSubmit(data: ContactUsField) {
    console.log("Dados enviados:", data);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-primary">Unybay</h1>
        <p className="text-center text-gray-600 mb-6">
          Fale Conosco através do formulário abaixo
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              {...register("name")}
              placeholder="Nome completo"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <textarea
              {...register("message")}
              placeholder="Escreva sua mensagem..."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none h-24 resize-none"
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
