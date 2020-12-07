import Swal from "sweetalert2"
export default class ErrorHandler {
    errorHandler(response) {
        switch (response.status) {
            case 400:
                Swal.fire('Ops!', "Servidor não entendeu a requisição", "error")
                break;
            case 401:
                Swal.fire('Houve um problema!', "Cliente não autorizado!", "error")
                break;
            case 403:
                Swal.fire('Desculpe!', "Você não tem permissão para acessar esse conteúdo", "error")
                break;
            case 404:
                Swal.fire('Houve um problema!', "O servidor não pode encontrar o recurso solicitado!", "error")
                break;
            case 406:
                Swal.fire('Desculpe!', "No momento essa operação não é possível!", "error")
                break;
            case 422:
                Swal.fire('Desculpe!', "Verifique os campos iSwal.fireormados e tente novamente!", "error")
                break;
            case 429:
                Swal.fire('Aguarde um momento e tente novamente!', "Você enviou muitas requisições nesse instante!", "error")
            case 500:
                Swal.fire('Desculpe!', "O servidor encontrou uma situação com a qual não sabe lidar.", "error")
            case 522:
                Swal.fire('Desculpe!', "Houve um erro desconhecido", "error")
        }
    }
}
