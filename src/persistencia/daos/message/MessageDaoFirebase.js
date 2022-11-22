import ContenedorFirebase from "../../contenedores/ContenedorFirebase.js";

class MessageDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("message");
  }
}

export { MessageDaoFirebase };