import { container } from "tsyringe";

import { IMailProvider } from "./MailProvider/IMailProvider";
import { MailProvider } from "./MailProvider/implementations/MailProvider";

container.registerSingleton<IMailProvider>(
    "MailProvider",
    MailProvider
);