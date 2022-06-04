export class RepositoryError extends Error {
    constructor(paramName?: string) {
        super(paramName);
        this.name = "RepositoryError"
    }
}