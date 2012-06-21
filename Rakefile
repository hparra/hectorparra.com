# Rake file for VisitPuertoLopez.com

desc "Build with Jekyll"
task :build do
  puts "Building with Jekyll..."
  system("jekyll")
  
  # HACK: something in Jekyll is being stupid
  system("cp .htaccess _site/")
end

desc "Build & Serve with Jekyll"
task :server do
  system("jekyll --server")
end

desc "Deploys via rsync"
task :deploy do
  puts "Deploying via rsync (& SSH)..."  
  # -v --verbose
  # -r --recursive
  # -l --links (copy symlinks as such)
  # -t --times (preserve times)  
  # -z --compress (compress data during transfer)
  # -e (specify remote shell)
  system("rsync -vrltz -e ssh _site/ hectorparra.com@hectorparra.com:domains/hectorparra.com/html")
end
