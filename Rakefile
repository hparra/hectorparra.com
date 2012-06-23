# Rake file for VisitPuertoLopez.com

desc "Deploys via rsync"
task :deploy do
  puts "Deploying via rsync (& SSH)..."  
  # -v --verbose
  # -r --recursive
  # -l --links (copy symlinks as such)
  # -t --times (preserve times)  
  # -z --compress (compress data during transfer)
  # -e (specify remote shell)
  system("rsync -vrltz -e ssh --exclude-from '.rsyncignore' ./ hectorparra.com@hectorparra.com:domains/hectorparra.com/html")
end
