import { AxiosRequest } from "./ApiRemote";
import { Config } from "@Constant";
import { usePrintAlert } from "@Hooks";

const requestClass = new AxiosRequest(Config.Api, Config.isProd);
const { AlertTop } = usePrintAlert();

const endPoint = {
  auth: {
    auth: "auth",
    login: "/user/login",
    register: "/user/register"
  }
};

/***
 * @function requestHttp
 * @description Metodo para lanzar la petición contra gateway
 * @param {datos} datos - Aqui envias el objeto que quieres que el backend reciba
 * @param {config} config - La configuración de la gateway se basa en un punto de entrada "base" (Servidor destino), enpoint de destino "entry" (Endpoint de destino) y el verbo http a utilizar
 ***/

const requestHttp = async (datos, { base, entry, method, id = "none" }) => {
  let dataSend = Object.keys(datos).length > 0 ? datos : {};
  let endPointFinal =
    id != "none" ? `${endPoint[base][entry]}/${id}` : endPoint[base][entry];
  const { data } = await requestClass.ExecutePetition("", {
    data: { ...dataSend },
    point: {
      section: endPoint[base][base],
      endpoint: endPointFinal,
      method: method.toLowerCase(),
    },
  });
  AlertTop(data.msg, data.status);
  return data;
};

export { requestHttp };
