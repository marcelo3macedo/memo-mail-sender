import { container } from "tsyringe";

import { IMailProvider } from "./MailProvider/IMailProvider";
import { SendInBlueProvider } from "./MailProvider/implementations/SendInBlueProvider";

container.registerSingleton<IMailProvider>(
    "SendInBlueProvider",
    SendInBlueProvider
);