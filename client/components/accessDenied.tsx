const AccessDenied = (): JSX.Element => {
  return (
    <div className="mx-auto p-3">
      <h1 className="mb-3">Out of Bounds! ✋</h1>
      <p>You must be logged in to do that.</p>
    </div>
  )
}

export default AccessDenied
