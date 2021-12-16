import AppServices from "../services";

const rootServices = {
    user: AppServices
}
const func = () => rootServices;
export type RootService = ReturnType<typeof func>;
export default rootServices;