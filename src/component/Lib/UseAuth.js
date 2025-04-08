export function useAuth() {
    const user = {
      name: 'Zee',
      avatar: '/profile-img.png',
      isLoggedIn: true,
    }
  
    return { user }
  }