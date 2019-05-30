"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tl = require("azure-pipelines-task-lib/task");
var EnvironmentConfigurations = /** @class */ (function () {
    function EnvironmentConfigurations() {
    }
    EnvironmentConfigurations.prototype.getTeamURI = function () {
        return this.loadFromEnvironment(EnvironmentConfigurations.TEAM_FOUNDATION_KEY);
    };
    // public getCollectionURI(): string {
    //     return this.loadFromEnvironment(EnvironmentConfigurations.COLLECTION_URI_KEY);
    // }
    EnvironmentConfigurations.prototype.getAccessKey = function () {
        return tl.getEndpointAuthorizationParameter(EnvironmentConfigurations.VSS_CONNECTION_KEY, EnvironmentConfigurations.ACCESS_PARAMETER, false);
    };
    EnvironmentConfigurations.prototype.getRepository = function () {
        return this.loadFromEnvironment(EnvironmentConfigurations.REPOSITORY_KEY);
    };
    EnvironmentConfigurations.prototype.getPullRequestId = function () {
        // return Number(this.loadFromEnvironment(EnvironmentConfigurations.PULL_REQUEST_ID_KEY));
        return Number(this.loadFromEnvironment("RELEASE_ARTIFACTS_" + "EPSTEAM_ZEROINJURY" + "_PULLREQUEST_TARGETBRANCH"));
    };
    EnvironmentConfigurations.prototype.getProjectName = function () {
        return this.loadFromEnvironment(EnvironmentConfigurations.PROJECT_KEY);
    };
    EnvironmentConfigurations.prototype.getTargetBranch = function () {
        return this.loadFromEnvironment(EnvironmentConfigurations.PULL_REQUEST_TARGET_BRANCH);
    };
    EnvironmentConfigurations.prototype.getHostType = function () {
        return this.loadFromEnvironment(EnvironmentConfigurations.HOST_KEY);
    };
    EnvironmentConfigurations.prototype.getReleaseId = function () {
        return Number(this.loadFromEnvironment(EnvironmentConfigurations.RELEASE_ID_KEY));
    };
    EnvironmentConfigurations.prototype.getBuildId = function () {
        return Number(this.loadFromEnvironment(EnvironmentConfigurations.BUILD_ID_KEY));
    };
    EnvironmentConfigurations.prototype.loadFromEnvironment = function (key) {
        return tl.getVariable(key);
    };
    EnvironmentConfigurations.TEAM_FOUNDATION_KEY = "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI";
    //  private static readonly COLLECTION_URI_KEY = "SYSTEM_COLLECTIONURI";
    EnvironmentConfigurations.VSS_CONNECTION_KEY = "SYSTEMVSSCONNECTION";
    EnvironmentConfigurations.ACCESS_PARAMETER = "ACCESSTOKEN";
    EnvironmentConfigurations.REPOSITORY_KEY = "BUILD_REPOSITORY_NAME";
    EnvironmentConfigurations.PULL_REQUEST_ID_KEY = "SYSTEM_PULLREQUEST_PULLREQUESTID";
    EnvironmentConfigurations.PROJECT_KEY = "SYSTEM_TEAMPROJECT";
    EnvironmentConfigurations.BUILD_ID_KEY = "BUILD_BUILDID";
    EnvironmentConfigurations.RELEASE_ID_KEY = "RELEASE_RELEASEID";
    EnvironmentConfigurations.HOST_KEY = "SYSTEM_HOSTTYPE";
    EnvironmentConfigurations.PULL_REQUEST_TARGET_BRANCH = "SYSTEM_PULLREQUEST_TARGETBRANCH";
    return EnvironmentConfigurations;
}());
exports.EnvironmentConfigurations = EnvironmentConfigurations;
