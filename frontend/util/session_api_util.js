export const signUpUser = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user },
    })
);

export const logInUser = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user },
    })
)

export const logOutUser = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
)