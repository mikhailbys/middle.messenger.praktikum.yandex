import {BaseAPI} from "./base-api";
import HTTPTransport from "../services/api";
import {processResponseStatus} from "../utils/ApiUtils";
import {SignInData} from "../pages/authorization/authorization.service";
import {SignUpData} from "../pages/registry/registry.service";

const authAPIInstance = new HTTPTransport();

const root = '/user'

class ProfileAPI extends BaseAPI {

}