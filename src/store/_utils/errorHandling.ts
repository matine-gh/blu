
export default function* errorHandling(error: any, failureAction?: any): any {
    if (error.response) {
        console.log('error')
    } else {
        console.log('success', failureAction)
    }
}