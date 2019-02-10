package config

// Config contains all application configuration
type Config struct {
	BuildVersion string
	BuildHash    string
	BuildTime    string
	BindPort     int
	BindHost     string
	DatabasePath string
}
