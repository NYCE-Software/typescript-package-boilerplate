import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";

export default async (): Promise<Config.InitialOptions> => {
    const { compilerOptions } = await require("@nyce/config/tsconfig.json");
    const nyceBaseOptions: Config.InitialOptions = await require("@nyce/config/jest.cjs");

    return {
        ...nyceBaseOptions,
        moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/src/" }) ?? {},
    };
};
