export default defineNuxtRouteMiddleware(( to, from) => {
    const token = useCookie("token"); // Get token from cookies

    if( !token.value) {
        return navigateTo("/login"); // Redirect to login if not authenticated
    }
});